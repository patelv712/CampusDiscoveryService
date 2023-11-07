describe("Testing how system will react if a non-host try to add invitees", () => {
  test(
    "this should give an error when a non-host tries to add invitees",
  () => {


    const input = new Event(
      InputEvent, value= {
        category: "student",

      }
    );

    const output = "You can only add invitees if you are the host";

    expect(addInvitees(input, {
      value= {
        category: "student"

      }
    })).toEqual(output);

  });
});
