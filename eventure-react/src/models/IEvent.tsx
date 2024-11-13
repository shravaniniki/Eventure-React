export interface IEvent{
  id?: number;
  name: string;             // Name of the event
  organizer: string;        // Organizer of the event
  email: string;            // Organizer's email (should be unique)
  phone: string;            // Organizer's phone number
  e_date: Date;             // Event date
  duration: string;         // Duration of the event
  location: string;         // Location of the event     
  maxParticipants: number;   // Maximum participants allowed
  e_mode: string;           // Mode of the event (e.g., online, offline)
  description: string;      // Description of the event
}