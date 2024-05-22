import { ref } from 'vue';

async function handleEntry(entry, basePath = '/') {
  const result = {
    kind: entry.kind,
    name: entry.name,
    key: basePath + entry.name,
    isLeaf: false,
    handle: entry,
  };
  if (entry.kind === 'file') {
    result.isLeaf = true;
    return result;
  }
  result.children = [];
  const iter = entry.entries();
  for await (const [, subEntry] of iter) {
    result.children.push(await handleEntry(subEntry, result.key));
  }
  result.children.sort((a, b) => {
    if (a.kind === b.kind) {
      return 0;
    } else if (a.kind === 'directory') {
      return -1;
    }
    return 1;
  });
  return result;
}

export function useDir() {
  const treeData = ref(null);
  const openDirDialog = async () => {
    try {
      const dirEntryHandle = await showDirectoryPicker();
      const root = await handleEntry(dirEntryHandle);
      treeData.value = [root];
    } catch {}
  };
  return {
    treeData,
    openDirDialog,
  };
}
