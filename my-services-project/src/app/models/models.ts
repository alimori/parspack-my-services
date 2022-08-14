export interface ServiceItem {
    name: string;
    type: string;
    id: number;
    status: string;
    nextduedate: string;
    amount: string;
    invoiceUrl: string | null;
  }

  type Status = 'Active' | 'Pending' | 'Cancelled';


export interface ServiceType {
    title: string;
    icon: string;
    number?: number;
}