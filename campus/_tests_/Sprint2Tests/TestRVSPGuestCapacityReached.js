describe("Testing how system will react once guest capacity reached", () => {
  test(
    "this should give an error when trying to delete an error when you are not admin",
  () => {


    const input = new Event(
      InputEvent, value= {
        guest: 10,
        willStatus: [
          'a',
          'b',
          'c',
          'd',
          'e',
          'f',
          'g',
          'h',
          'i',
          'j',
          'k',
        ]

      }
    );

    const output = "guest capacity has been reached";

    expect(handleRSVP_ADD_ATTEND_WILL(input, {
      value= {
        guest: 10,
        willStatus: [
          'k',
          'j',
          'i',
          'h',
          'g',
          'f',
          'e',
          'd',
          'c',
          'b',
          'a',
        ]

      }
    })).toEqual(output);

  });
});
