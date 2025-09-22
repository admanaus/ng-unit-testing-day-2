// src/app/message.service.spec.ts
import { MessageService } from "./message.service"

describe('MessageService', () => {
    let service: MessageService; // We declare a variable to hold our service instance

    beforeEach(() => {
        // This code runs before EACH test
        service = new MessageService();
    });

    it('should have no messages to start', () => {
        // We can just assert, as the `beforeEach()` already arranged the service for us.
        expect(service.messages.length).toBe(0);
    });

    it('should add a message when add is called', () => {
        // Act
        service.add('message1');

        // Assert
        expect(service.messages.length).toBe(1);
    });

    it('should remove all messages when clear is called', () => {
        // Arrange: Add a message first, so there's something to clear
        service.add('message1');

        // Act: Call the clear method
        service.clear();

        // Assert: Check if the messages array is now empty
        expect(service.messages.length).toBe(0);
    });

});