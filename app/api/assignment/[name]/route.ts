import { NextRequest, NextResponse } from 'next/server';
import { getAssignment, hasSpun } from '@/lib/assignments';
import { getPersonById, getPersonByName } from '@/data/people';

export async function GET(
  request: NextRequest,
  { params }: { params: { name: string } }
) {
  try {
    const spinnerName = params.name;

    if (!spinnerName) {
      return NextResponse.json(
        { error: 'Spinner name is required' },
        { status: 400 }
      );
    }

    // Find person by ID (the name parameter is actually the ID)
    const spinner = getPersonById(spinnerName) || getPersonByName(spinnerName);
    if (!spinner) {
      return NextResponse.json(
        { error: `Person not found` },
        { status: 404 }
      );
    }

    // Check if has spun
    if (!hasSpun(spinner.id)) {
      return NextResponse.json(
        { error: 'You haven\'t spun the wheel yet', hasSpun: false },
        { status: 400 }
      );
    }

    // Get assignment
    const recipientId = getAssignment(spinner.id);
    if (!recipientId) {
      return NextResponse.json(
        { error: 'No assignment found' },
        { status: 404 }
      );
    }

    // Get recipient person data
    const recipient = getPersonById(recipientId);
    if (!recipient) {
      return NextResponse.json(
        { error: 'Recipient information not found' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      spinner: {
        id: spinner.id,
        name: spinner.name,
      },
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
    console.error('Error in assignment API:', error);
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : 'An error occurred' 
      },
      { status: 500 }
    );
  }
}

