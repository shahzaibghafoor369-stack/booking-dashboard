type CacheEntry = { expiresAt: number; value: any }
const cache = new Map<string, CacheEntry>()

export function getCached<T>(key: string) {
  const e = cache.get(key)
  if (!e) return null
  if (Date.now() > e.expiresAt) { cache.delete(key); return null }
  return e.value as T
}

export function setCache(key: string, value: any, ttlSec = 15) {
  cache.set(key, { value, expiresAt: Date.now() + ttlSec * 1000 })
}
