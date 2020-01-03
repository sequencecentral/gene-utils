import {GUID, parseID} from './GUID';
import { expect } from 'chai';
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
// import 'mocha';

describe('GUID', () => {
  it('should return GUID', () => {
    const result = GUID();
    expect(result).to.not.be.null;
  });
});

describe('parseID',()=>{
    it('should parse an ID',()=>{
        const ID = GUID();
        const spacer = "_";
        const fullID = `S${spacer}${ID}`
        const parsed = parseID(fullID,spacer)[1];
        console.log(`Original: ${ID}`);
        console.log(`Parsed: ${parsed}`);
        expect(parsed).to.equal(ID);
    });
});