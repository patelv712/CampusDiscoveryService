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


describe("Category on change handler function", () => {
  test("this should update the category on change", () => {
    const input = new Event(
      InputEvent, value="admin"
    );

    const output = "admin";

    expect(categoryHandler(input, "admin")).toEqual(output);

  });
});
