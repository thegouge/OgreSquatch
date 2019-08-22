const formattedData = require("./trimmedData.js");
const testResponse = require("./response.json");

describe("Trimmed Data Object", () => {
  let testDataObject;

  beforeEach(() => {
    testDataObject = new formattedData(testResponse);
  });

  it("Should parse the responses from ovrstat", () => {
    expect(testDataObject instanceof formattedData).toBeTruthy();
  });

  it("Should create a simplified version if the account is private", () => {
    const modifiedTestResponse = {...testResponse};
    modifiedTestResponse.private = true;

    testDataObject = new formattedData(modifiedTestResponse);

    expect(testDataObject.name).toBe("TheGouge#1273");
    expect(testDataObject.private).toBeTruthy();
    expect(Object.keys(testDataObject).length).toBe(2);
  });

  it("Should properly organize profile info", () => {
    const profileData = testDataObject.profile;

    expect(Object.keys(profileData).length).toBe(7);
    expect(profileData.name).toBe("TheGouge#1273");
    expect(profileData.level).toBe(63);
    expect(profileData.endorsement).toBe(1);
    expect(profileData.prestige).toBe(0);
    expect(profileData.rating).toBe(0);
    expect(profileData.gamesWon).toBe(162);
    expect(typeof profileData.icons).toBe("object");
  });

  describe("Hero list", () => {
    it("Should have a 'heroes' array", () => {
      expect(testDataObject.heroes).toBeTruthy();
      expect(Array.isArray(testDataObject.heroes)).toBeTruthy();
    });

    it("Should have a quick and competitive split per hero", () => {
      const allHeroQuick = testDataObject.heroes[0].quick;
      const allHeroComp = testDataObject.heroes[0].comp;
      expect(allHeroQuick).toBeTruthy();
      expect(allHeroComp).toBeTruthy();
    });
  });
});
