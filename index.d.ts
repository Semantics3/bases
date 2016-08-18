// Type definitions for bases 0.2.1
// Project: https://github.com/aseemk/bases.js
// Definitions by: Hari Krishna

declare module "bases" {

	class Bases {
		
		toAlphabet(num: number, alphabet: string): string;

		fromAlphabet(str: string, alphabet: string): number;

		toBase(num: number, base: number);

	}
	namespace base {

		type NUMERALS: string;
		
		type LETTERS_LOWERCASE: string;

		type LETTERS_UPPERCASE: string;

		type KNOWN_ALPHABETS: any;

	}
	export = Bases; 
}
