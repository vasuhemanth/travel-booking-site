import { writable } from 'svelte/store';
import type { TravelPackage } from '../data/packages';

export const packageList = writable<TravelPackage[]>([]);
export const bookings = writable<{ name: string; email: string; travelers: number; packageId: number }[]>([]);
export const searchResults = writable<TravelPackage[]>([]);