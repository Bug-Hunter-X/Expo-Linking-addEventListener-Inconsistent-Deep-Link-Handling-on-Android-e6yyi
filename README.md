# Expo Linking.addEventListener Inconsistent Deep Link Handling on Android

This repository demonstrates a bug and its solution related to the Expo `Linking.addEventListener` function's inconsistent behavior in handling deep links on Android.  The issue involves the event listener not always triggering when the app is in the background or already open.

## Bug Description

The `Linking.addEventListener` function in Expo is crucial for handling deep links. However, on Android, it doesn't always fire reliably, particularly when the app is already running in the background. This can lead to missing crucial navigation or data processing related to the deep link.  This repository contains a sample project to demonstrate the issue and a solution to improve reliability.

## Solution

The solution involves using the `Linking.getInitialURLAsync` function along with `addEventListener` to ensure that even if the deep link is processed when the app is already running, it is properly handled.