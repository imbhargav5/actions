async function fetchEntry({space, accessToken}, args) {
  const client = require('contentful').createClient({
      space,
      accessToken
  });
  const entry = await client.getEntry(args)
  if (entry) return entry
  console.log(`Error getting entry`)
}

async function getEntry(
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

    const entry = await fetchEntry(
      {
        space,
        accessToken,
      },
      args
    );
    return parse(entry);
  } catch (err) {
    console.log(err);
  }
}

module.exports = getEntry;
