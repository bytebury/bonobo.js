import { titleize, upper } from "../strings";
import type { KeyOf, ValueOf } from "../types";

/**
 * Represents a State Name in Titlecase.
 */
export type StateName = ValueOf<typeof StateInformation>;
/**
 * Represents a State Code in Uppercase.
 */
export type StateCode = KeyOf<typeof StateInformation>;

/**
 * Returns the state name by the state code.
 *
 * @example
 * getStateName("CT") // "Connecticut"
 * getStateName("NY") // "New York"
 * getStateName("ct" as Lowercase<StateCode>) // "Connecticut"
 * getStateName("Ma") // Typescript won't let you do this
 */
export function getStateName(
	stateCode: StateCode | Uppercase<StateCode> | Lowercase<StateCode>,
): StateName {
	const normalize = upper(stateCode) as StateCode;
	return StateInformation[normalize];
}

/**
 * Returns the state code by the state name.
 *
 * @example
 * getStateCode("Connecticut"); // "CT"
 * getStateName("New York"); // "NY"
 * getStateName("New york"); // TypeScript won't let you do this
 * getStateName("NEW YORK" as Uppercase<StateName>); // NY
 * getStateName("new york" as Lowercase<StateName>); // NY
 */
export function getStateCode(
	stateName: StateName | Uppercase<StateName> | Lowercase<StateName>,
): StateCode {
	const normalize = titleize(stateName) as StateName;
	return StateCodeInformation[normalize];
}

const StateInformation = {
	AL: "Alabama",
	AK: "Alaska",
	AZ: "Arizona",
	AR: "Arkansas",
	CA: "California",
	CO: "Colorado",
	CT: "Connecticut",
	DE: "Delaware",
	FL: "Florida",
	GA: "Georgia",
	HI: "Hawaii",
	ID: "Idaho",
	IL: "Illinois",
	IN: "Indiana",
	IA: "Iowa",
	KS: "Kansas",
	KY: "Kentucky",
	LA: "Louisiana",
	ME: "Maine",
	MD: "Maryland",
	MA: "Massachusetts",
	MI: "Michigan",
	MN: "Minnesota",
	MS: "Mississippi",
	MO: "Missouri",
	MT: "Montana",
	NE: "Nebraska",
	NV: "Nevada",
	NH: "New Hampshire",
	NJ: "New Jersey",
	NM: "New Mexico",
	NY: "New York",
	NC: "North Carolina",
	ND: "North Dakota",
	OH: "Ohio",
	OK: "Oklahoma",
	OR: "Oregon",
	PA: "Pennsylvania",
	RI: "Rhode Island",
	SC: "South Carolina",
	SD: "South Dakota",
	TN: "Tennessee",
	TX: "Texas",
	UT: "Utah",
	VT: "Vermont",
	VA: "Virginia",
	WA: "Washington",
	WV: "West Virginia",
	WI: "Wisconsin",
	WY: "Wyoming",
} as const;

const StateCodeInformation = {
	Alabama: "AL",
	Alaska: "AK",
	Arizona: "AZ",
	Arkansas: "AR",
	California: "CA",
	Colorado: "CO",
	Connecticut: "CT",
	Delaware: "DE",
	Florida: "FL",
	Georgia: "GA",
	Hawaii: "HI",
	Idaho: "ID",
	Illinois: "IL",
	Indiana: "IN",
	Iowa: "IA",
	Kansas: "KS",
	Kentucky: "KY",
	Louisiana: "LA",
	Maine: "ME",
	Maryland: "MD",
	Massachusetts: "MA",
	Michigan: "MI",
	Minnesota: "MN",
	Mississippi: "MS",
	Missouri: "MO",
	Montana: "MT",
	Nebraska: "NE",
	Nevada: "NV",
	"New Hampshire": "NH",
	"New Jersey": "NJ",
	"New Mexico": "NM",
	"New York": "NY",
	"North Carolina": "NC",
	"North Dakota": "ND",
	Ohio: "OH",
	Oklahoma: "OK",
	Oregon: "OR",
	Pennsylvania: "PA",
	"Rhode Island": "RI",
	"South Carolina": "SC",
	"South Dakota": "SD",
	Tennessee: "TN",
	Texas: "TX",
	Utah: "UT",
	Vermont: "VT",
	Virginia: "VA",
	Washington: "WA",
	"West Virginia": "WV",
	Wisconsin: "WI",
	Wyoming: "WY",
} as const;
