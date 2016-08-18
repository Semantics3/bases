// Type definitions for bases 0.2.1
// Project: https://github.com/aseemk/bases.js
// Definitions by: Hari Krishna

declare module "bases" {

	class Bases {
		
		toAlphabet(num: number, alphabet: string): string;

		fromAlphabet(str: string, alphabet: string): number;

		toBase(num: number, base: number);

		KNOWN_ALPHABETS: any;

		NUMERALS: string;

		LETTERS_LOWERCASE: string;

		LETTERS_UPPERCASE: string;

	}
	export = Bases; 
}
