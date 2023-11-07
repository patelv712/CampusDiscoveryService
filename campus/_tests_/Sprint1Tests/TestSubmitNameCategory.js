// code for when user submits name and category

/*
const onSubmit = (data) => {
    console.log(data);
    if (name.trim().length == 0) {
        alert("cannot enter empty name");
    } else {
        navigate('/Events', {state:{name: name, category:category}});
        console.log(name);
    }


}
*/

describe("Submit data test function", () => {
  test("this should update the name and category state when user submits login", () => {
    const input = new Event(
      InputEvent, value={
        name:
          "Aadit",
        category:
          "admin"
      }
    );

    const output = {
      name:
        "Aadit",
      category:
        "admin"
    };

    expect(categoryHandler(input, {
      name:
        "Aadit",
      category:
        "admin"
    })).toEqual(output);

  });
});
