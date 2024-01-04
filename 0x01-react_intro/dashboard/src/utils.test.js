import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

test("check getFullYear", () => {
  expect(getFullYear()).toBe(2024);
});

test("check if getFooterCopy returns correct string", () => {
  expect(getFooterCopy(true)).toBe("Holberton School");
  expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
});

test("check getLatestNotification returns correct string", () => {
  expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
});
