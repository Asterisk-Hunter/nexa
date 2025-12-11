// No-op shim for WebGL Cleanup
export const glCleanup = {
    register: () => { },
    registerContext: () => { },
    registerRaf: () => { },
    cleanupAll: () => {
        // console.log('[GLCleanup] No-op shim called.');
    }
};
