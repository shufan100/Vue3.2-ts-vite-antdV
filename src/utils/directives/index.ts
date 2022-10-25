import type { App } from 'vue';
import { setupMoveDirective } from './move';
import { setupAntiShakeDirective } from './antiShake';
import { setupColorDirective } from './color'

export function setupGlobDirectives(app: App) {
  setupMoveDirective(app);
  setupAntiShakeDirective(app);
  setupColorDirective(app);
}