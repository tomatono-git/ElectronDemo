import "mocha";
import { assert } from "chai";

describe("テスト１", () => {
    describe("test sub 1", () => {
        it("必ず成功", () => {
            assert.isTrue(1 === 1, "必ず成功");
        });
        it("必ず失敗", () => {
            assert.isTrue(1 !== 1, "必ず失敗");
        });
    });
});
