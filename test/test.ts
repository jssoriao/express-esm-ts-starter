import { expect } from "chai";

import { sum } from "@/lib/math";

describe("Math", function () {
  it("should return sum of array", function () {
    expect(sum(1, 2, 3, 4, 5)).to.eq(15);
  });
});
