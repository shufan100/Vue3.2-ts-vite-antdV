import type { App } from 'vue';
import { setupMoveDirective } from './move';
import { setupAntiShakeDirective } from './antiShake';

export function setupGlobDirectives(app: App) {
  setupMoveDirective(app);
  setupAntiShakeDirective(app);
}