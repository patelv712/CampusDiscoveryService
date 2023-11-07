describe("Testing for Removing attendees as admin", () => {
    test(
      "this should allow you to remove an attendee as an admin",
    () => {
  
  
      const input = new Event(
        InputEvent, value= {

          Event:
            "party on tech green",
        Role:
            "Admin",
          category:
            "Will Attend"
  
        }
      );
  
      const output = "You must be admin to cancel an event";
  
      expect(handleUpdate(input, {
        Event:
        "party on tech green",
    Role:
        "Admin",
      category:
        "Will Attend"
      })).toEqual(output);
  
    });
  });
  