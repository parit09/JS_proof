const nfts = [];

function mintNFT(item, owner, year) {
    const current_nft = {
        resource: item,
        owner: owner,
        year: year
    };
    nfts.push(current_nft);
}

function listNFTs() {
    var t=0;
    for (var i of nfts) {
        console.log("NFT ID :" + (t+1));
        console.log("Resource :" + i.resource);
        console.log("Owner :" + i.owner);
        console.log("Year :" + i.year + "\n");
        t++;
    }
}

function getTotalSupply() {
    console.log("Total no. of NFTs is "+ nfts.length);
}

mintNFT("Painting", "Parit", "2006");
mintNFT("Digital Art", "Roy", "2003");
mintNFT("Meta Mask", "Tan", "2002");

listNFTs();
getTotalSupply();