describe("Testing a time conflict for my events", () => {
  test(
    "this should throw an error for time conflicts",
  () => {
    const input = {
      t1: "00:12",
      t2: "00:12"
    }

    const output = Error("time conflict");
    expect(handleRefresh(t1="00:12", t2="00:12")).toEqual(output);

  });
});
