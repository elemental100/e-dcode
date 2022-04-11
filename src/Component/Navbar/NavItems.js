import Monoalphabetic from "../Monoalphabetic/Monoalphabetic";
import ShipCipher from "../ShipCipher/ShipCipher";

const NAV_ITEMS = [
  {
    label: "Shift Cipher",
    children: [
      {
        label: "Encrypt",
        subLabel: "Encode a plain text to shift cipher",
        href: "ShipCipher",
      },
      {
        label: "Decrypt",
        subLabel: "Decode a shift cipher to plain text",
        href: "ShipCipher",
      },
    ],
  },
  {
    label: "Monoalphabetic Substitution",
    children: [
      {
        label: "Encrypt",
        subLabel: "Encode a plain text to shift cipher",
        href: "Monoalphabetic",
      },
      {
        label: "Decrypt",
        subLabel: "Decode a shift cipher to plain text",
        href: "Monoalphabetic",
      },
    ],
  },
  {
    label: "Rail fence",
    children: [
      {
        label: "Encrypt",
        subLabel: "Encode a plain text to shift cipher",
        href: "#",
      },
      {
        label: "Decrypt",
        subLabel: "Decode a shift cipher to plain text",
        href: "#",
      },
    ],
  },
  {
    label: "RSA",
    children: [
      {
        label: "Encrypt",
        subLabel: "Encode a plain text to shift cipher",
        href: "RSA",
      },
      {
        label: "Decrypt",
        subLabel: "Decode a shift cipher to plain text",
        href: "RSA",
      },
    ],
  },
];

export default NAV_ITEMS;
