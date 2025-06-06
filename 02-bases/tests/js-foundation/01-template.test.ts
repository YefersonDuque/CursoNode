
import { exceptions } from "winston";
import  {emailTemplate} from "../../src/js-foundation/01-template"

describe('js-foundation/01-template.ts', () => {

    test('emailTemplate should contain a greeting', () => {

        expect( emailTemplate).toContain('Hi, ');

    });

    test('emailTempate should constain {{name}} ', ()=>{

        expect(emailTemplate).toContain('{{name}}')
    })
});