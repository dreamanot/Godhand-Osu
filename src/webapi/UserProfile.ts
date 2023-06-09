export interface UserProfile {
  get_time: number;
  avatar_url: string,
  country_code: string,
  default_group: string,
  id: number,
  is_active: boolean,
  is_bot: boolean,
  is_online: boolean,
  is_supporter: boolean,
  last_visit: string,
  pm_friends_only: boolean,
  profile_colour: string,
  username: string,
  cover_url: string,
  discord: string,
  has_supported: boolean,
  interests: string,
  join_date: string,
  kudosu: { total: number, available: number },
  location: string,
  max_blocks: number,
  max_friends: number,
  occupation: string,
  playmode: string,
  playstyle: string[],
  post_count: number,
  profile_order: string[],
  title: string,
  title_url: string,
  twitter: string,
  website: string,
  country: { code: string, name: string },
  cover: { custom_url: string, url: string, id: number},
  is_admin: boolean,
  is_bng: boolean,
  is_full_bn: boolean,
  is_gmt: boolean,
  is_limited_bn: boolean,
  is_moderator: boolean,
  is_nat: boolean,
  is_restricted: boolean,
  is_silenced: boolean,
  account_history: [{ description: string, id: number, length: number, timestamp: string, type: string}],
  active_tournament_banner: string,
  badges: [{ awarded_at: string, description: string, image_url: string, url: string }],
  beatmap_playcounts_count: number,
  comments_count: number,
  favourite_beatmapset_count: number,
  follower_count: number,
  graveyard_beatmapset_count: number,
  groups: [{ colour: string, has_listing: boolean, has_playmodes: boolean, id: number, identifier: string, is_probationary: boolean, name: string, short_name: string, playmodes: string }],
  loved_beatmapset_count: number,
  mapping_follower_count: number,
  monthly_playcounts: [{ start_date: string, count: number }],
  page: { html: string },
  pending_beatmapset_count: number,
  previous_usernames: string[],
  ranked_beatmapset_count: number,
  replays_watched_counts: [{ start_date: string, count: number }],
  scores_best_count: number,
  scores_first_count: number,
  scores_recent_count: number,
  statistics: {
    level: { current: number, progress: number },
    global_rank: number,
    pp: number,
    ranked_score: number,
    hit_accuracy: number,
    play_count: number,
    play_time: number,
    total_score: number,
    total_hits: number,
    maximum_combo: number,
    replays_watched_by_others: number,
    is_ranked: boolean,
    grade_counts: { ss: number, ssh: number, s: number, sh: number, a: number },
    country_rank: number,
    rank: { country: number }
  },
  support_level: number,
  user_achievements: [{ achieved_at: string, achievement_id: number }],
  rankHistory: { mode: string, data: number[] },
  rank_history: { mode: string, data: number[] },
  ranked_and_approved_beatmapset_count: number,
  unranked_beatmapset_count: number
}

/**
 * データ容量節約のため、余計なデータを取り除く
 */
export function trimProfile(data: UserProfile): UserProfile {
  return {
    avatar_url: data.avatar_url,
    country_code: data.country_code,
    default_group: data.default_group,
    id: data.id,
    is_active: data.is_active,
    is_bot: data.is_bot,
    is_online: data.is_online,
    is_supporter: data.is_supporter,
    last_visit: data.last_visit,
    pm_friends_only: data.pm_friends_only,
    username: data.username,
    join_date: data.join_date,
    country: { code: data.country.code, name: data.country.name },
    previous_usernames: data.previous_usernames,
    statistics: data.statistics,
    support_level: data.support_level,
    get_time: data.get_time
  } as UserProfile;
}