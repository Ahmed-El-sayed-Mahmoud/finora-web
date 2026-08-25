export const SUPPORT_EMAIL = "ahmed.elsayed478@outlook.com";

export const ANDROID_PACKAGE = "com.ahmed_elsayed.aistudymate";

export const GOOGLE_PLAY_URL =
  `https://play.google.com/store/apps/details?id=${ANDROID_PACKAGE}`;

export function supportMailto(subject: string) {
  return `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}`;
}
