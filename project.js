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
    for (var i = 0; i < nfts.length; i++) {
        console.log("NFT ID :" + (i+1));
        console.log("Resource :" + nfts[i].resource);
        console.log("Owner :" + nfts[i].owner);
        console.log("Year :" + nfts[i].year + "\n");
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