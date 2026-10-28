/*
 * Every feature key a tablet can list in "features". Kept free of content types so the content schema can import
 * it without a circular reference (which would turn every tablet into `any`). Labels, groups and derive rules are
 * in FEATURE_GROUPS and EX_FEATURES (src/lib/tablets.ts), which must use exactly these keys.
 */
export const FEATURE_KEYS = [
  '5g',
  'wifi6',
  'esim',
  'dual-sim',
  'nfc',
  'camera-free',
  'lidar',
  'thermal',
  'barcode',
  'pen',
  'keyboard',
  'ptt',
  'glove',
  'outdoor',
  'lanyard',
  'ip68',
  'mil-std',
  'replaceable-battery',
  'hot-swap',
  'docking',
  'charge-in-zone',
  'usb-in-zone',
  'mdm',
  'updates-2030',
  'mining-version',
] as const;

export type Feature = (typeof FEATURE_KEYS)[number];
