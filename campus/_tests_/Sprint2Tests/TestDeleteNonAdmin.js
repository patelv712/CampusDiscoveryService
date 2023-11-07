describe("Testing how to delete event when not an admin", () => {
  test(
    "this should give an error when trying to delete an error when you are not admin",
  () => {


    const input = new Event(
      InputEvent, value= {
        name:
          "Aadit",
        category:
          "student"

      }
    );

    const output = "You must be an admin or organizer of the event to delete";

    expect(handleUpdate(input, {
      name:
        "Aadit",
      category:
        "student"
    })).toEqual(output);

  });
});
