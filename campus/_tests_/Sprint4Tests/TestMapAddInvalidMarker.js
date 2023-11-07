describe("Testing adding an invalid marker to map", () => {
  test(
    "this should throw an error for unsupported location",
  () => {
    const input = new Event("coda");
    const output = Error("location not found");
    expect(Directory(location="coda")).toEqual(output);

  });
});
