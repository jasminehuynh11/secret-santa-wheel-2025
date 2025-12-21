import { NextRequest, NextResponse } from 'next/server';
import { assignRandomRecipient, hasSpun } from '@/lib/assignments';
import { getPersonById, getPersonByName } from '@/data/people';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { spinnerName } = body;

    if (!spinnerName || typeof spinnerName !== 'string') {
      return NextResponse.json(
        { error: 'Spinner name is required' },
        { status: 400 }
      );
    }

    // Find person by name or alias
    const spinner = getPersonByName(spinnerName);
    if (!spinner) {
      return NextResponse.json(
        { error: `Person "${spinnerName}" not found` },
        { status: 404 }
      );
    }

    // Check if already spun
    if (hasSpun(spinner.id)) {
      return NextResponse.json(
        { 
          error: 'You have already spun the wheel',
          alreadyAssigned: true,
          spinnerId: spinner.id,
        },
        { status: 400 }
      );
    }

    // Assign random recipient
    const recipientId = assignRandomRecipient(spinner.id);
    const recipient = getPersonById(recipientId);

    if (!recipient) {
      return NextResponse.json(
        { error: 'Failed to get recipient information' },
        { status: 500 }
      );
    }

    // Return recipient information (without revealing to others)
    return NextResponse.json({
      success: true,
      spinnerId: spinner.id,
      spinnerName: spinner.name,
      recipient: {
        id: recipient.id,
        name: recipient.name,
        aliases: recipient.aliases,
        gender: recipient.gender,
        starSign: recipient.starSign,
        hint: recipient.hint,
        avatar: recipient.avatar,
      },
    });
  } catch (error) {
    console.error('Error in spin API:', error);
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : 'An error occurred while spinning the wheel' 
      },
      { status: 500 }
    );
  }
}

