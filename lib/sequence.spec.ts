import * as sequence from './sequence';
import { expect } from 'chai';

describe('sanitize',()=>{
  let input:string = "acGacatAcatc";
  it(`Should sanitize innput: ${input}`,()=>{
    const res = sequence.sanitize(input);
    expect(res).to.equal('ACGACATACATC');
    console.log(`Result: ${res}`);
  });
});

describe('reverse', () => {
    let input:string = "acGacatAcatc";
    before(()=>{
        console.log(`Reversing strand: ${input}`);
    })
    it('should reverse DNA', () => {
      const result = sequence.reverse(input);
      expect(result).to.not.be.null;
      expect(result).to.equal(sequence.reverse(input));
    });
  });

  describe('revcomp',()=>{
    let input:string = "acGacatAcatc";
    it(`Should create rev comp of seq: ${input}`,()=>{
      const result = sequence.revcomp(input);
      expect(result).to.equal("GATGTATGTCGT");
      console.log(`Result: ${result}`);
    });
  });

  describe('GCContnent',()=>{
    let input:string = "acGacatAcatc";
    it(`Should calculate GC Content of: ${input}`,()=>{
      const result = sequence.GCContent(input);
      expect(result).to.equal(42);
      console.log(`Calculated GC Content: ${result}%`);
    });
  });

  describe('melt',()=>{
    let input:string = "acGacatAcatc";
    it(`Should calculate melting temp of ${input}`,()=>{
      const result = sequence.melt(input);
      expect(result).not.to.be.null;
      console.log(`Calculated MT: ${result}`);
    });
  });