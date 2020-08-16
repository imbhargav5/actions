async function fetchEntries({space, accessToken}, args) {
  const client = require('contentful').createClient({
      space,
      accessToken
  });
  const entries = await client.getEntries(args)
  if (entries.items) return entries.items
  console.log(`Error getting Entries`)
}

async function getEntries(
  { space, accessToken },
  args
) {
  try {

    function parse({ fields, sys: { id } }) {
      return {
        id,
        ...fields,
      };
    }

    const entries = await fetchEntries(
      {
        space,
        accessToken,
      },
      args
    );

    return entries.map(parse);
  } catch (err) {
    console.log(err);
  }
}

module.exports = getEntries;
