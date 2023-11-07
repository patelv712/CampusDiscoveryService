// SPRINT 1 TEST CASES


// This is the code for the on change handler for name and category

/*
const onChangeHandler = event => {
    setName(event.target.value);
};
 const categoryHandler = event => {
    setCategory(event.target.value);
 }
*/



describe("Name on handler function", () => {
  test("this should update the name on change", () => {
    const input = new Event(
      InputEvent, value="Aadit"
    );

    const output = "Aadit";

    expect(onChangeHandler(input, "Aadit")).toEqual(output);

  });
});
