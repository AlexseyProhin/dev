export default function TabCard({ stringA, stringB }) {

      return <div style={{
            height: "100px",
            width: "450px",
            background: '#CCCCFF',
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexDirection: "column",
            paddingTop: "5",
            paddingBottom: "5"
      }}>

            <div style={{
                  height: "40px",
                  width: "200px",
                  background: "green",
                  display: "flex"
            }}>{stringA}</div>

            <div style={{
                  height: "40px",
                  width: "200px",
                  background: "yellow",
                  display: "flex"
            }}>{stringB}</div>
      </div>
}
