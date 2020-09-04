import { isDateValid } from "../utils/date_helpers";

describe("Date Helper functions are working", () => {
 test("only valid dates are allowed, MM/DD/YYYY", () => {
  expect(isDateValid("09/13/2020")).toBeTruthy();
  expect(isDateValid("09/13/202")).toBeFalsy();
  expect(isDateValid("0/13/202")).toBeFalsy();
  expect(isDateValid("0913202")).toBeFalsy();
  expect(isDateValid("09132020")).toBeFalsy();
  expect(isDateValid("")).toBeFalsy();
 });
});
