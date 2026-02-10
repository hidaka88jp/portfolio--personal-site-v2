import { createClient } from 'microcms-js-sdk';
import type { MicroCMSQueries, MicroCMSImage, MicroCMSListContent } from 'microcms-js-sdk';

export type TechStack = {
  id: string;
  name: string;
};

export type Works = {
  title: string;
  category: string;
  techStack: TechStack[];
  content: string;
  thumbnail: MicroCMSImage;
} & MicroCMSListContent;

export type Notes = {
  title: string;
  techStack: TechStack[];
  content: string;
  thumbnail: MicroCMSImage;
} & MicroCMSListContent;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required');
}

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export const getAllWorksList = async () => {
  const listData = await client.getAllContents<Works>({
    endpoint: 'works',
  });
  return listData;
};

export const getWorksList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Works>({
    endpoint: 'works',
    queries,
  });
  return listData;
};

export async function getWorkDetail(contentId: string, draftKey?: string) {
  try {
    const workDetail = await client.get<Works>({
      endpoint: 'works',
      contentId,
      queries: draftKey ? { draftKey } : undefined,
    });
    return workDetail;
  } catch (error) {
    console.error('getWorkDetail error:', error);
    return null;
  }
}

export const getAllNotesList = async () => {
  const listData = await client.getAllContents<Notes>({
    endpoint: 'notes',
  });
  return listData;
};

export const getNotesList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Notes>({
    endpoint: 'notes',
    queries,
  });
  return listData;
};

export async function getNoteDetail(contentId: string, draftKey?: string) {
  try {
    const noteDetail = await client.get<Notes>({
      endpoint: 'notes',
      contentId,
      queries: draftKey ? { draftKey } : undefined,
    });
    return noteDetail;
  } catch (error) {
    console.error('getNoteDetail error:', error);
    return null;
  }
}

export const getTechStackList = async () => {
  const listData = await client.getList<TechStack>({
    endpoint: 'tech-stacks',
    queries: { limit: 100 },
  });
  return listData;
};
