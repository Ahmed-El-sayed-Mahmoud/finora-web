# Finora Android — Google Play release checklist

Reviewed 25 August 2026 for package `com.ahmed_elsayed.aistudymate`.
This checklist reduces policy risk but cannot guarantee approval; Google reviews
the uploaded App Bundle, Play Console answers, store listing, reviewer access,
and actual behavior together.

## Before submission

- Deploy this repository to Vercel and confirm `/privacy`, `/data-deletion`,
  `/terms`, and `/contact` are public over HTTPS without a login.
- Set `NEXT_PUBLIC_SITE_URL` in Vercel to the final production origin.
- Put the live privacy URL and external account-deletion URL in Play Console.
- Set `EXPO_PUBLIC_PRIVACY_POLICY_URL` and
  `EXPO_PUBLIC_TERMS_OF_USE_URL` in the EAS production environment before the
  final Android build.
- Provide Play reviewers with a reusable account and complete access
  instructions. Keep the API and authentication services available during review.
- Complete Data safety from the exact production bundle, including account and
  profile data, study/user content, uploaded images/files/audio, app activity,
  purchase status, device identifiers, crash reports, and every bundled SDK.
- Verify the final bundle targets API 36 and does not contain broad photo/storage,
  phone-state, USB, or other unused permissions.
- Configure Google Play products and RevenueCat, then test localized pricing,
  purchase, renewal, cancellation, expiry, account hold, and Restore purchases.
- Complete content rating, target audience, ads, health, and AI-generated-content
  declarations accurately. Finora should be described as a study/focus tool,
  not a medical treatment or cure.

## Strong Lock declarations

Finora is **not** an accessibility tool. Its optional Strong Lock uses an
AccessibilityService to identify the foreground app only during a user-started,
timed session. Complete the AccessibilityService declaration and provide a
narrated video showing:

1. The in-app disclosure and both consent/decline paths.
2. Granting access in Android settings.
3. Starting Strong Lock, attempting to open a blocked app, and ending the lock.
4. How the user can revoke access.

Also complete the foreground-service declaration for every type in the final
manifest (currently `specialUse` and `mediaPlayback`) and supply the requested
feature videos. Remove any type that the production app does not genuinely use.

## Official policy references

- [User Data and account deletion](https://support.google.com/googleplay/android-developer/answer/10144311)
- [Data safety](https://support.google.com/googleplay/android-developer/answer/10787469)
- [Target API requirements](https://support.google.com/googleplay/android-developer/answer/11926878)
- [Payments](https://support.google.com/googleplay/android-developer/answer/9858738)
- [AI-generated content](https://support.google.com/googleplay/android-developer/answer/14094294)
- [AccessibilityService](https://support.google.com/googleplay/android-developer/answer/10964491)
- [Foreground services](https://support.google.com/googleplay/android-developer/answer/13392821)
- [Sensitive permissions and minimum-scope alternatives](https://support.google.com/googleplay/android-developer/answer/16558241)
