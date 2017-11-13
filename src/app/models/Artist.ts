export class Artist {
  name: string;
  mbid: string;
  image: any[];
  url: string;
  stats: {
    "listeners": string,
    "playcount": string
  };

  similar: {
    "artist": any[]
  };

  bio: {
    "published": string,
    "summary"  : string,
    "content"  : string
  }
}