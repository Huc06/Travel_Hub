import { fromHex, SpendingValidator, toHex } from "lucid-cardano";
import plutus from "./plutus.json";
import { encode } from "cbor-x";

export function getValidator(): SpendingValidator {
    const helloWorldValidator = plutus.validators.find((validator) => validator.title === 
    "hello_world.hello_world.spend");

    if (!helloWorldValidator) {
        throw new Error("Validator not found");
    }

    const helloWorldScrip = toHex(encode(fromHex(helloWorldValidator.compiledCode)));

    console.log("Validator retrieved:", helloWorldValidator);

    return {
        type: "PlutusV2",
        script: helloWorldScrip,
    }
}