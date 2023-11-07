describe("Testing for RSVP for will attend", () => {
    test(
      "this should give an error when trying to RSVP for will attend and nemsis",
    () => {
  
  
      const input = new Event(
        InputEvent, value= {
          RSVPStatus:
            "Will Attend",
          category:
            "RSVP"
  
        }
      );
  
      const output = "You must cancel your current RSVP to do another RSVP";
  
      expect(handleUpdate(input, {
        name:
          "Will Attend",
        category:
          "RSVP"
      })).toEqual(output);
  
    });
  });
  