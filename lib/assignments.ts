import { people, getPersonById } from '@/data/people';

// In-memory storage for assignments
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
 * Get available recipients for a spinner
 * Excludes: the spinner themselves and already assigned people
 */
export function getAvailableRecipients(spinnerId: string): string[] {
  const assignedRecipients = getAssignedRecipients();
  
  return people
    .filter(person => 
      person.id !== spinnerId && 
      !assignedRecipients.has(person.id)
    )
    .map(person => person.id);
}

/**
 * Assign a recipient to a spinner
 * Returns the recipient ID if successful, throws error if invalid
 */
export function assignRecipient(spinnerId: string, recipientId: string): void {
  // Validate spinner exists
  const spinner = getPersonById(spinnerId);
  if (!spinner) {
    throw new Error(`Invalid spinner ID: ${spinnerId}`);
  }

  // Validate recipient exists
  const recipient = getPersonById(recipientId);
  if (!recipient) {
    throw new Error(`Invalid recipient ID: ${recipientId}`);
  }

  // Check if spinner has already spun
  if (hasSpun(spinnerId)) {
    throw new Error(`${spinner.name} has already spun the wheel`);
  }

  // Check if recipient is already assigned
  if (getAssignedRecipients().has(recipientId)) {
    throw new Error(`${recipient.name} has already been assigned to someone else`);
  }

  // Prevent self-assignment
  if (spinnerId === recipientId) {
    throw new Error('Cannot assign yourself as recipient');
  }

  // Make the assignment
  assignments.set(spinnerId, recipientId);
}

/**
 * Randomly select an available recipient for a spinner
 * Returns the recipient ID
 */
export function assignRandomRecipient(spinnerId: string): string {
  const available = getAvailableRecipients(spinnerId);
  
  if (available.length === 0) {
    throw new Error('No available recipients');
  }

  // Randomly select from available recipients
  const randomIndex = Math.floor(Math.random() * available.length);
  const selectedRecipientId = available[randomIndex];
  
  assignRecipient(spinnerId, selectedRecipientId);
  
  return selectedRecipientId;
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

