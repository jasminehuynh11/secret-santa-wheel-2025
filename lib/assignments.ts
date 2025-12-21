import { people, getPersonById } from '@/data/people';

// Fixed assignment mapping (circular chain)
const FIXED_ASSIGNMENTS: Record<string, string> = {
  'khanh': 'jasmine',
  'jasmine': 'chi-nga',
  'chi-nga': 'vinh-nguyen',
  'vinh-nguyen': 'linh-dan',
  'linh-dan': 'tan',
  'tan': 'khanh',
};

// In-memory storage for assignments (tracks who has spun)
// Format: Map<spinnerId, recipientId>
const assignments = new Map<string, string>();

/**
 * Get the recipient assigned to a spinner
 */
export function getAssignment(spinnerId: string): string | undefined {
  return assignments.get(spinnerId);
}

/**
 * Check if a person has already spun the wheel
 */
export function hasSpun(spinnerId: string): boolean {
  return assignments.has(spinnerId);
}

/**
 * Get all people who have been assigned (as recipients)
 */
export function getAssignedRecipients(): Set<string> {
  return new Set(assignments.values());
}

/**
 * Get the fixed recipient for a spinner based on predetermined assignments
 * Returns the recipient ID
 */
export function assignFixedRecipient(spinnerId: string): string {
  // Validate spinner exists
  const spinner = getPersonById(spinnerId);
  if (!spinner) {
    throw new Error(`Invalid spinner ID: ${spinnerId}`);
  }

  // Check if spinner has already spun
  if (hasSpun(spinnerId)) {
    throw new Error(`${spinner.name} has already spun the wheel`);
  }

  // Get the fixed recipient for this spinner
  const recipientId = FIXED_ASSIGNMENTS[spinnerId];
  if (!recipientId) {
    throw new Error(`No fixed assignment found for ${spinner.name}`);
  }

  // Validate recipient exists
  const recipient = getPersonById(recipientId);
  if (!recipient) {
    throw new Error(`Invalid recipient ID: ${recipientId}`);
  }

  // Make the assignment
  assignments.set(spinnerId, recipientId);
  
  return recipientId;
}

/**
 * Get all current assignments (for debugging/admin purposes)
 */
export function getAllAssignments(): Map<string, string> {
  return new Map(assignments);
}

/**
 * Reset all assignments (for testing/resetting)
 */
export function resetAssignments(): void {
  assignments.clear();
}

