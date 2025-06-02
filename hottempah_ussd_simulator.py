import uuid

# Simulated ticket storage
tickets = {}

def display_ussd_menu():
    print("\nWelcome to the Hottempah experience.")
    print("Please select your ticket:")
    print("1. Early Bird - 5,000 RWF")
    print("2. Regular - 10,000 RWF")

def generate_ticket(ticket_type, price):
    ticket_id = str(uuid.uuid4())[:8]  # Short unique code
    ticket = {
        'type': ticket_type,
        'price': price,
        'status': 'valid'
    }
    tickets[ticket_id] = ticket
    return ticket_id

def send_ticket(ticket_id):
    print(f"🎟 Ticket link (simulated SMS): https://hottempah.link/ticket/{ticket_id}")

def validate_ticket(ticket_id):
    if ticket_id not in tickets:
        print("❌ Invalid ticket ID.")
        return
    if tickets[ticket_id]['status'] == 'used':
        print("⚠️ This ticket has already been used.")
        return
    tickets[ticket_id]['status'] = 'used'
    print("✅ Ticket validated successfully! Enjoy the party 🕺🏽💃🏽")

def start_ticket_flow():
    display_ussd_menu()
    choice = input("Enter choice (1 or 2): ").strip()
    
    if choice == '1':
        ticket_type = "Early Bird"
        price = 5000
    elif choice == '2':
        ticket_type = "Regular"
        price = 10000
    else:
        print("❌ Invalid selection. Please try again.")
        return
    
    # Ask for quantity of tickets
    while True:
        qty_input = input("How many tickets do you want? (Max 5): ").strip()
        if qty_input.isdigit():
            qty = int(qty_input)
            if 1 <= qty <= 5:
                break
        print("❌ Please enter a number between 1 and 5.")
    
    print(f"\nYou selected {qty} x {ticket_type} tickets. Total: {price * qty} RWF")
    
    ticket_ids = []
    for _ in range(qty):
        ticket_id = generate_ticket(ticket_type, price)
        ticket_ids.append(ticket_id)
    
    print("\n🎟 Tickets purchased successfully! Here are your ticket links:")
    for tid in ticket_ids:
        send_ticket(tid)
    
    validate_now = input("\nDo you want to validate a ticket now? (yes/no): ").strip().lower()
    if validate_now == 'yes':
        ticket_to_validate = input("Enter the ticket ID to validate: ").strip()
        validate_ticket(ticket_to_validate)

if __name__ == "__main__":
    while True:
        start_ticket_flow()
        again = input("\nWould you like to simulate another ticket purchase? (yes/no): ").strip().lower()
        if again != 'yes':
            print("Goodbye 👋🏽")
            break
