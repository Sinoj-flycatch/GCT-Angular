export interface BookingSummaryResponses {
    status:     string;
    message:    BookingSummaryMessage;
    results:    string;
    statusCode: number;
}

export interface BookingSummaryMessage {
    booking_summary: BookingSummary;
    payment_summary: PaymentSummary;
}

export interface BookingSummary {
    completed_bookings: number;
    pending_bookings:   number;
    cancelled_bookings: number;
}

export interface PaymentSummary {
    total_received:   number;
    pending_payment:  number;
    cancelled_amount: number;
}
export interface BookingSummaryParams {date?:string,booked_date_after?:string,booked_date_before?:string}