describe("Testing for whether number of guest met", () => {
    test(
      "this should notify wherther there are enough guests already registered for an event",
    () => {
  
  
      const input = new Event(
        InputEvent, value= {

          Event:
            "party on tech green",
        Role:
            "Admin",
          category:
            "Will Attend", 
            guestCapacity: "10"
  
        }
      );
  
      const output = "You must be admin to cancel an event";
  
      expect(handleUpdate(input, {
        Event:
        "party on tech green",
    Role:
        "Admin",
      category:
        "Will Attend", 
        guestCapacity: "10"
      })).toEqual(output);
  
    });
  });
  