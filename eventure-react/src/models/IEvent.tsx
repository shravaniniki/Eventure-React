export interface IEvent{
  id?: number;
  name: string;             
  organizer: string;        
  email: string;            
  phone: string;            
  e_date: Date;     
  duration: string;       
  location: string;             
  maxParticipants: number; 
  e_mode: string;          
  description: string;     
}