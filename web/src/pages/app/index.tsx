import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import type { NextPage } from "next";
import { useMeQuery } from "../../graphql/generated/graphql";
import { getServerPageGetProducts, ssrGetProducts } from "../../graphql/generated/page";
import { withApollo } from "../../lib/withApollo";

const Home: NextPage = ({ data }) => {
  const { user } = useUser();
  const { data: me } = useMeQuery()

  return (
    <div className="text-violet-500">
      <h1>Hello World</h1>
      <pre>begin: {JSON.stringify(me, null, 2)} :end</pre>
      {/* <pre>{JSON.stringify(data.products, null, 2)}</pre> */}
      <pre>
        {JSON.stringify(user, null, 2)}
      </pre>
    </div>
  )
}

export const getServerSideProps = withPageAuthRequired({
  getServerSideProps: async (ctx) => {
    // return getServerPageGetProducts({}, ctx)

    return {
      props: {}
    }
  }
})

export default withApollo(
  ssrGetProducts.withPage()(Home)
)