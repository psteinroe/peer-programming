import { describe, it, expect } from "bun:test";
import { hasPaths } from "./index";

const MOCK = {
	id: 1,
	text: "some-text",
	array: ["element-1", "element-2"],
	empty_array: [],
	null_value: null,
	array_within_array: [
		{
			val: "hello",
			inner_array: [
				{
					val: "world",
				},
			],
		},
	],
	array_of_objects: [
		{ some: { value: "value" } },
		{ some: { value: "value" } },
	],
	invalid_array_of_objects: [
		{ some: { value: "value" } },
		{ some: { other: "value" } },
	],
	date: new Date().toISOString(),
	boolean: false,
	some: {
		nested: {
			value: "test",
			array: [{ type: "a" }, { type: "b" }],
		},
	},
};

describe(".hasPaths", () => {
	it("with null value for object", () => {
		expect(hasPaths(MOCK, ["null_value.value"])).toEqual(false);
	});

	it("with empty array", () => {
		expect(hasPaths(MOCK, ["empty_array.value"])).toEqual(false);
	});

	it("with valid array of objects with json path", () => {
		expect(hasPaths(MOCK, ["array_of_objects.some->>value"])).toEqual(true);
	});

	it("with simple array", () => {
		expect(hasPaths(MOCK, ["array"])).toEqual(true);
	});

	it("with valid array of objects", () => {
		expect(hasPaths(MOCK, ["array_of_objects.some.value"])).toEqual(true);
	});

	it("with invalid array of objects", () => {
		expect(hasPaths(MOCK, ["invalid_array_of_objects.some.value"])).toEqual(
			false,
		);
	});

	it("with nested arrays", () => {
		expect(hasPaths(MOCK, ["array_within_array.inner_array.val"])).toEqual(
			true,
		);
	});
});
